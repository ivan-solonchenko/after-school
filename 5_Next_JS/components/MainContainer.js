import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keyword}) => {
    return (
        <>
            <Head>
                <meta keywords={'my first project whith Next.js' + keywords}/>
                <title>my Next.js</title>
            </Head>

            <div className={"navbar"}>
                <A href={'/'} text='Home'/>
                <A href={'/users'} text='Users'/>
            </div>

            <div className={"main-container"}>
                {children}
            </div>

            <style>
                {`
                  .navbar {
                    background: olivedrab;
                    padding: 15px;
                  }
                `}
            </style>
        </>
    );
};

export default MainContainer;