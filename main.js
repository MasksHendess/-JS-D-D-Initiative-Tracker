
/*function CreatePage(){

    
    var Button = document.createElement("button")
    Button.innerHTML ="Add to Initiative"
    Button.onclick = function()
    {
      AddToInitiative();
    };

    document.body.appendChild(Button); 

    var DamageButton = document.createElement("button");
    DamageButton.innerHTML ="Assign Damage"
    DamageButton.onclick = function()
    {
        AssignDamage();
    };

    document.body.appendChild(DamageButton); 

    var RemoveButton = document.createElement("button")
    RemoveButton .innerHTML ="Remove from Initiatve"
    RemoveButton .onclick = function()
    {
      RemoveFromInitiative();
    };

    document.body.appendChild(RemoveButton ); 

    var ClearButton = document.createElement("button");
    ClearButton.innerHTML ="Clear Initiative"
    ClearButton.onclick = function()
    {
        window.location.assign("index.html")
    };

    document.body.appendChild(ClearButton); 

    var Table = document.createElement("table");
   Table.setAttribute("id", "griditem01")
    var tr = document.createElement("tr");

    var th = document.createElement("th")
    var  header1 = "Name";

    var th2 = document.createElement("th")
    var header2 = "initiative";

    var th3 = document.createElement("th")
    var header3 = "Damage Taken";
    
    
    var TextNode = document.createTextNode(header1); 
    var TextNode2 = document.createTextNode(header2); 
    var TextNode3 = document.createTextNode(header3); 

    

    th.appendChild(TextNode); 
    th2.appendChild(TextNode2); 
    th3.appendChild(TextNode3);  
    tr.appendChild(th)
    tr.appendChild(th2)
    tr.appendChild(th3)
    Table.appendChild(tr)
    document.body.appendChild(Table); 


}*/


var fighters =[];

function Clear()
{
    var confirm = prompt("Are you sure? y/n");
    if (confirm === "y")
    {
    var table =   document.getElementById("table");
    table.innerHTML='';
    document.body.appendChild(table); 
    fighters =[];
    }
}
function writeInitiativeOnScreen(Fighters)
{
    

var table =   document.getElementById("table");
table.innerHTML='';

    var tr = document.createElement("tr");

    var th = document.createElement("th")
    var  header1 = "Name";

    var th2 = document.createElement("th")
    var header2 = "initiative";

    var th3 = document.createElement("th")
    var header3 = "Damage Taken";
    
    
    var TextNode = document.createTextNode(header1); 
    var TextNode2 = document.createTextNode(header2); 
    var TextNode3 = document.createTextNode(header3); 

    

    th.appendChild(TextNode); 
    th2.appendChild(TextNode2); 
    th3.appendChild(TextNode3); 
    tr.appendChild(th)
    tr.appendChild(th2)
    tr.appendChild(th3)
    table.appendChild(tr)

   
 
    Fighters = Fighters.sort(function (a, b) { 
        return a.Initiative - b.Initiative;  });
    Fighters.reverse();
    
    
    Fighters.forEach(function(element) 
    {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerHTML = element.Name 
   
        var td2 = document.createElement("td");
        td2.innerHTML = element.Initiative 

        var td3 = document.createElement("td");
        td3.innerHTML = element.Damage 
        
        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        table.appendChild(tr)
        });
var grid = document.getElementById("griditem02");
grid.appendChild(table);
console.log(Fighters)
//document.body.appendChild(table); 
}

let id = 0;
function AddToInitiative(){
id = id +Number(1);
    var name = prompt("Enter Name");
var initiative = prompt("Enter" + name +"'s initiative");
while( isNaN(initiative)== true)
{
    initiative = prompt("Enter" + name +"'s initiative");
}
var newplayer = {Name: name, Initiative: Number(initiative), Damage: Number(0), Id: id}
fighters.push(newplayer)
    writeInitiativeOnScreen(fighters)
}

function RemoveFromInitiative(){
    let text = "";
    fighters.forEach(element =>
        {
            text = text + element.Id + " : " + element.Name + "\n" ;

        });

    var victimId = prompt(text +"\nType a Id(number) of a combatant you wish to remove:");
    while(isNaN(victimId)== true) // isNan == false proves parameter is number
    {
        victimId = prompt(text +"Invalid Selection!\nType a Id(number) of a combatant you wish to remove:");
    }
 
            fighters = fighters.filter(function(returnableObjects){
                return returnableObjects.Id !=victimId; // Filtrerar bort utifrån unikt Id istället för Namn.
            });
          
       
        writeInitiativeOnScreen(fighters)
}

function AssignDamage()
{
    let text = "";
    fighters.forEach(element =>
        {
            text = text + element.Id + " : " + element.Name + "\n" ;

        });

    var victimId = prompt(text+ "\nWho is taking damge? (Id):");

    var damage = prompt("How much damage? (Number)");
    while(isNaN(damage)== true)
    {
        damage = prompt("How much damage? (Number)");
    }
    fighters.forEach(element => 
        {
        if(element.Id == victimId)
        {
            element.Damage = Number(element.Damage) + Number(damage)
        }
        });
        let fightCount = fighters.length;
        if(fightCount > 0)
        {
        writeInitiativeOnScreen(fighters)
          }
}