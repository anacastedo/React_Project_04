import MyParagraph from "./MyParagraph";

const DemoOutput = props =>{
    console.log( 'running demo')
    return <MyParagraph>{props.show? 'This is new!':''}</MyParagraph>

}

export default DemoOutput;