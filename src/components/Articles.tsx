import { FC, Suspense } from "react";
import { fetchData } from "../lib/fakeApi";

const resource = fetchData();

const Articles: FC = () => {


function PageData() {
    // Try to read user info, although it might not have loaded yet
    const user = resource.user.read();

    return <div>
        {JSON.stringify(user)}
    </div>;
  }

    return (
        <div>
            <PageData />
        </div>
    )
}

export default Articles;