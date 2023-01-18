function question(){
    var txt;
    var person = prompt("何を決めますか：", "課題をするべきか");
    while(person == null || person == "" || person === "Basin Taro") {
      person = prompt("何を決めますか？：", "課題をするべきか");
    }
    txt = person;
    return(
      <div style = {{textAlign: "center"}}>
        <span>
        </span>
        <span>
        </span>
      </div>
      
    )
  }
  
  export default question;