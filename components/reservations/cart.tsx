import { Button, Col, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import useSWR, { SWRConfiguration } from 'swr';
import { BsCheckSquareFill, BsDoorOpen, BsFillXSquareFill } from 'react-icons/bs';


const fetcher = () => fetch('/api/dates').then((res) => res.json());

export function Cart() {

    // State aprašymas
    //const { data, error } = useSWR('/api/dates', fetcher)

    // Duomenų būsena
    //if (error) return <div>Failed to load</div>
    //if (!data) return <div>Loading...</div>


    return (
        <div className="d-md-inline-flex mt-3 justify-content-xs-center">


        </div>
    );
}