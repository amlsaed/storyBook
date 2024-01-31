import {render,screen} from "@testing-library/react"
import {Button} from './Button'
import { Primary } from "./Button.stories"

test("should render Button",()=>{
    render(<Button label={"click"}/>)
    const btnElement = screen.getByRole("button")
    expect(btnElement).toBeInTheDocument()
    expect(btnElement).toHaveTextContent(/click/i)

    })

test("should render primary button",()=>{
    render(<Primary {...Primary.args}/>)
    const btnElement = screen.getAllByRole("button")
    expect(btnElement[0]).toHaveClass("storybook-button--primary");
})