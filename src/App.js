import { LargePerson } from "./people/LargePerson"
import { LargeProduct } from "./products/LargeProduct"
import { RegularList } from "./RegularList"
import { NumberedList } from "./NumeredList"
import { SmallPerson } from "./people/SmallPerson"
import { SmallProduct } from "./products/SmallProduct"
import {Modal} from './Modal';

const people = [{
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicycling', 'driving']
},{
  name: 'Brenda Smith',
  age: 24,
  hairColor: 'black',
  hobbies: ['golf', 'mathematics']
},{
  name: 'Jane Garcia',
  age: 37,
  hairColor: 'blonde',
  hobbies: ['boilogy', 'medicine', 'gymnastiics']
},]


const products = [{
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5
},{
  name: 'Basketball',
  price: '$10',
  description: 'Just like the pros use',
  rating: 3.8
},{
  name: 'Runnning Shoes',
  price: '$120',
  description: 'State-of-the-art technologyforoptimum running',
  rating: 4.2
}] 

function App() {
  return(
    <>
      <Modal>
        <RegularList 
          items={people}
          recourceName="person"
          itemComponent={SmallPerson} />
        <NumberedList
          items={people}
          recourceName="person"
          itemComponent={LargePerson} />
        <RegularList 
          items={products}
          recourceName="product"
          itemComponent={SmallProduct} />
        <NumberedList
          items={products}
          recourceName="product"
          itemComponent={LargeProduct} />
      </Modal>
    </>
  )
}
export default App