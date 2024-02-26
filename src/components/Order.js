import { useState } from "react"



const Order = () => {
   const [orderList,setOrderList] = useState("")
   const [shoppingList,setShoppingList] = useState([])
  
   const handleChange = (e) =>{
    setOrderList(e.target.value)
   }
   const handleSubmit = (e) =>{
    e.preventDefault()
    setShoppingList([...shoppingList,orderList])
    setOrderList("")
   }
   const handleDelete = (item) =>{
    const updatedList = shoppingList.filter((el) => el !== item)
    setShoppingList(updatedList)
   }
  return (
    <div className="page-container">
        <h1>Alışveriş Listesi</h1>
    <article className="order-container">
      
        <form onSubmit={handleSubmit} className="form-container">
        <div>
        <h3>Alınacaklar</h3>
        </div>
            <div>
                <label htmlFor="list"></label>
                <input
                type="text"
                id="list"
                name="list"
                placeholder="Yeni bir madde giriniz"
                value={orderList}
                onChange={handleChange}/>
            <button>Add</button>
            </div>
            <ul>
            {shoppingList.map((item) => (
                <li key={crypto.randomUUID()} className="shopping-list-item">
                    {item}
                    <button className="delete-button" onClick={() => handleDelete(item)}>X</button>
                </li>
            ))}
        </ul>
        </form>
    </article>
    </div>
  )
}
export default Order