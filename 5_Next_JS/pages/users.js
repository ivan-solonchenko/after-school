import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

    return (
        <MainContainer keywords={'users page'}>
            <h1>Users list</h1>
            <ol className={'users__list'}>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`./users/${user.id}`} className={'users__list-item'}>
                            <span>{user.name}</span>
                        </Link>
                    </li>
                )}
            </ol>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()

    return {
        props: {users},
    }
}