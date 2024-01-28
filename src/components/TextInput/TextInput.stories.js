import TextInput from './TextInput'


export default{
    title:"Examples/Input Text",
    component:TextInput
}

const Template = (args)=><TextInput {...args}/>

export const Default = Template.bind({})

Default.args={
    name:"fname",
    type:"text",
    placeholder:"Enter Your Name",
    label:"what Is Your First Name"
}

export const Password = Template.bind({})
Password.args={
    type:"password",
    name:"pass",
    placeholder:"pass",
    label:"pass"
}