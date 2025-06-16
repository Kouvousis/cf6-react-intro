// import Layout from "./components/Layout.tsx";
// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Todo from "./components/Todo/Todo.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import {useEffect} from "react";
// import OnlineStatus from "./components/OnlineStatus.tsx";
// import CounterWithReducer from "./components/CounterWithReducer.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import CounterWithAdvancedCustomHooks from "./components/CounterWithAdvancedCustomHook.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import OnlineStatusPage from "./pages/OnlineStatusPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
// import ExamplesPage from "./pages/ExamplesPage.tsx";
import RouterExamplesLayout from "./components/RouterExamplesLayout.tsx";
// import AutoRedirectPage from "./pages/AutoRedirectPage.tsx";
import AdvancedRedirect from "./components/AdvancedRedirect.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
// import FocusInput from "./components/FocusInput.tsx";
import UncontrolledInput from "./components/UncontrolledInput.tsx";
import MultiFieldFormWithZodValidation from "./components/MultiFieldFormWithZodValidation.tsx";
// import MultiFieldForm from "./components/MultiFieldForm.tsx";
// import MultiFieldFormWithValidation from "./components/MultiFieldFormWithValidation.tsx";

function App() {
    // useEffect(() => {
    //     const id: number = setInterval(() => console.log("tick"), 1000)
    //     return () => {
    //         clearInterval(id)
    //     }
    // }, []);

    return (
        <>

            {/*<Layout>*/}
            {/*<ClassComponent/>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ArrowFunctionalComponent/>*/}
            {/*<ArrowFunctionalComponentWithProps title={"Is an Arrow Functional Component with Props"}/>*/}
            {/*<ArrowFunctionalComponentWithPropsType*/}
            {/*    title={"Is an Arrow Functional Component with Props and Types"}*/}
            {/*    description={"This is a description"}*/}
            {/*/>*/}
            {/*<ClassComponentWithState/>*/}
            {/*<FunctionalComponentWithState/>*/}
            {/*<Counter/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterWithMoreStates/>*/}
            {/*<CounterAdvanced/>*/}
            {/*<CounterWithCustomHook/>*/}
            {/*<CounterWithAdvancedCustomHooks/>*/}
            {/*<CounterWithReducer/>*/}
            {/*<Todo/>*/}
            {/*<OnlineStatus/>*/}
            {/*</Layout>*/}
            <BrowserRouter>
                {/*<Layout>*/}
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route element={<RouterLayout/>}>
                        {/*<Route index element={<HomePage/>}/>*/}
                        {/*<Route index element={<MultiFieldForm/>}/>*/}
                        {/*<Route index element={<MultiFieldFormWithValidation/>}/>*/}
                        <Route index element={<MultiFieldFormWithZodValidation/>}/>
                        {/*<Route index element={<FocusInput/>}/>*/}
                        <Route index element={<UncontrolledInput/>}/>
                    </Route>
                    <Route path="examples" element={<RouterExamplesLayout/>}>
                        {/*<Route index element={<ExamplesPage/>}/>*/}
                        <Route path="name-changer" element={<NameChangerPage/>}></Route>
                        <Route path="online-status" element={<OnlineStatusPage/>}></Route>
                        {/*<Route path="auto-redirect" element={<AutoRedirectPage/>}/>*/}
                        <Route path="auto-redirect" element={<AdvancedRedirect/>}/>
                    </Route>
                    <Route path="users/:userId" element={<UserPage/>}>
                        <Route path="users" element={<UserPage/>}></Route>
                    </Route>
                    {/*<Route path="files/*" element={<FilePage/>}></Route>*/}
                    {/*must be at the bottom*/}
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
                {/*</Layout>*/}
            </BrowserRouter>
        </>
    )
}

export default App
