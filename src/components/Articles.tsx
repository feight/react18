import { FC, Suspense, useEffect, useState } from "react";
import { fetchData } from "../lib/fakeApi";

const resource = fetchData();

const Articles: FC = () => {

    const user = resource.user.read();

    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )
}

export default Articles;