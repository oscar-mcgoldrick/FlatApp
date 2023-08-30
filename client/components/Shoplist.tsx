export default function Shoplist() {

  async function handleSubmit() {

  }
  return (<>
    <form onSubmit={handleSubmit}>
      <input type='text'placeholder="Add an item here"/>
      <button type="submit">Add Items to list</button>
    </form>
  </>)
}