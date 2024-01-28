import {Counter} from "./counter"

export default {
    title:"Example/counter",
    component:Counter

}

const Template = (args)=> <Counter {...args}/>

export const Default = Template.bind({})
