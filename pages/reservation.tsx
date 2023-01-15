import type { NextPage } from "next";
import React from "react";
import { Stack } from "react-bootstrap";
import { Cart } from "../components/reservations/cart";

const Movies: NextPage = () => {
    return (
        <><h1 className="text-center">Rezervacija</h1>
            <Stack gap={5}>
                <Cart />
            </Stack></>
    );
};

export default Movies;

