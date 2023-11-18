/**
 * Greet should render the text hello and if a name is passed into the component 
 * It should render hello followed by the name
*/
import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

/**
 * test.only: apply the only this test in this file
 * test.skip: skip this test
 * 
 * describe to group the tests
 * describe blocks can be nested
 */


describe('Greet', () => {

    test('Greet renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    })
    
    test('Greet renders with a name', () => {
        render(<Greet name='John'/>)
        const textElement = screen.getByText('Hello John')
        expect(textElement).toBeInTheDocument()
    })

})
