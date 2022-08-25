import { useEffect, useState } from "react";
import { MoveBookContext, SectionContext } from "../../context";
import FloatingButton from "../FloatingButton";
import Header from "../Header";
import Search from "../Search";
import Section from "../Section";

function HomePage() {

    const [data, setData] = useState([]);
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);
    const [read, setRead] = useState([]);
    const [searching, setSearching] = useState(false);
    const [loading, setLoading] = useState(false);

    const obj = [
        {
            getter: currentlyReading,
            setter: setCurrentlyReading
        },
        {
            getter: wantToRead,
            setter: setWantToRead
        },
        {
            getter: read,
            setter: setRead
        },
        {
            getter: data,
            setter: setData
        },

    ]
    const openSearch = () => setSearching(true)
    const closeSearch = () => setSearching(false)

    const moveBook = (id, from, to) => {

        let arr = obj[from];
        let arrGetter = arr.getter;
        let [book] = arrGetter.splice(id, 1);
        arr.setter([...arrGetter]);
        console.log({toOut: to})

        if((typeof to) === "number"){
            console.log({to})
            let arr2 = obj[to];
            let arr2Getter = arr2.getter;
            arr2Getter.push(book);
            arr2.setter([...arr2Getter])
        }

        localStorage.setItem("currentlyReading", JSON.stringify(currentlyReading))
        localStorage.setItem("wantToRead", JSON.stringify(wantToRead))
        localStorage.setItem("read", JSON.stringify(read))
    }

    useEffect(() => {
        setCurrentlyReading(JSON.parse(localStorage.getItem("currentlyReading")) || [])

        setWantToRead(JSON.parse(localStorage.getItem("wantToRead")) || [])

        setRead(JSON.parse(localStorage.getItem("read")) || [])
    }, [])

    const searchHandler = (e) => {
        const str = e.target.value.replaceAll(/\s/g,'+');
        setLoading(true);

        fetch(`http://openlibrary.org/search.json?q=${str}`)
            .then((response) => response.json())
            .then((res) => {
                setData(res.docs)
                setLoading(false);
            });
    }
    // console.log(data)
    const debounceFunc = (func, delay) => {
        let timer;
        return function (...args) {
            const context = this;
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(context, args);
            }, delay)
        }
    }

    const optimisedSearchHandler = debounceFunc(searchHandler, 1000)

    return searching ? <MoveBookContext.Provider value={moveBook}><SectionContext.Provider value={3}><Search isOpen={searching} close={closeSearch} optimisedSearchHandler={optimisedSearchHandler} data={data} setData={setData} loading={loading}/></SectionContext.Provider></MoveBookContext.Provider>
        : (
            <MoveBookContext.Provider value={moveBook}>
                <div>
                    <Header />

                    <SectionContext.Provider value={0}>
                        <Section title={"Currently Reading"} books={currentlyReading}/>
                    </SectionContext.Provider>

                    <SectionContext.Provider value={1}>
                        <Section title={"Want To Read"} books={wantToRead} />
                    </SectionContext.Provider>

                    <SectionContext.Provider value={2}>
                        <Section title={"Read"} books={read} />
                    </SectionContext.Provider>

                    <FloatingButton open={openSearch} />
                </div>
            </MoveBookContext.Provider>
        );
}

export default HomePage;
