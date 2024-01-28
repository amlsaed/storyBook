import Accordion from './Accordion'

export default{
    title:"Example/Accordion",
    component:Accordion
}

const Template = (args)=><Accordion {...args}/>

export const Default = Template.bind({
    
})

Default.args={
   data:[{
    title:"title",
    content:"loream"
   },{
    title:"title",
    content:"loream"
   },{
    title:"title",
    content:"loream"
   },]
}