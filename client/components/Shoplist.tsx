import { ChangeEvent, FormEvent, useState } from "react"
import { addList } from "../actions/shoplists"
import { useAppDispatch } from "../hooks/hooks"
import { updateShopListAPI, getShopListAPI } from "../apis/shoplists"
import { useEffect } from "react"

export default function Shoplist() {

  const [shoppingList, setShoppingList] = useState([] as null | any)
  const [formItems, setFormItems] = useState('')
  const [activeList, setActiveList] = useState(null as any)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getShopListAPI()
      .then((currentList) => {
        setActiveList(currentList)
        console.log(currentList)
      })
  }, [])

  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault()
    const shopListArr = [...shoppingList, formItems]
    setShoppingList(shopListArr)
    console.log(shopListArr)
    await updateShopListAPI(shopListArr)
  }

  async function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const {value} = evt.currentTarget
    setFormItems(value)
  }
  return (<>

    <h3>Shopping list</h3>
    {activeList && activeList.map(item => (<p>{item} <button type='button'>-</button></p>))}
    
    <form onSubmit={handleSubmit}>
      <input type='text'placeholder="Add an item here" onChange={handleChange}/>
      <button type="submit">Add Item to list</button>
    </form>
    {shoppingList && shoppingList.map(item => (<p>{item}</p>))}
  </>)
}