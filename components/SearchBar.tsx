import React, {useState} from 'react'

const searchBar = () => {
const [searchInput, setSearchInput] = useState("");
const manufacturer= [
    { name: "Lenovo"},
    { name: "Asus"},
    { name: "Acer"},
    { name: "MSI"},
    { name: "Razer"},
    { name: "HP"},
];
const [manufacturers, setManufacturers] = useState("");
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    if (searchInput.length>0) {
        manufacturer.filter((manufacture)=> {
            return manufacture.name.match(searchInput);
        });
    }
};

return (
    <div>

    <input
     type="search"
     placeholder="Paieška"
     onChange={handleChange}
     value={searchInput} />
     <table>
        <tr>
            <th>manufacture</th>
        </tr>
        {manufacturer.map((manufacture,index) => {
            return(
            <div>
                <tr>
                    <td>{manufacture.name}</td>
                </tr>
            </div>)
})}
     </table>
</div>
)}
export default searchBar;