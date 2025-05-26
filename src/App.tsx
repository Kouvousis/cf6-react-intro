// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {

    return (
        <>

            <Layout>
                {/*<ClassComponent/>*/}
                {/*<FunctionalComponent/>*/}
                {/*<ArrowFunctionalComponent/>*/}
                {/*<ArrowFunctionalComponentWithProps title={"Is a Arrow Functional Component with Props"}/>*/}
                {/*<ArrowFunctionalComponentWithPropsType*/}
                {/*    title={"Is a Arrow Functional Component with Props and Types"}*/}
                {/*    description={"This is a description"}*/}
                {/*/>*/}
                {/*<ClassComponentWithState/>*/}
                {/*<FunctionalComponentWithState/>*/}
                <Counter/>
            </Layout>

        </>
    )
}

export default App
