let Todolist=[];


         displaylist();

         function displaylist(){

            let combineHTML="";

            for(let i=0;i<Todolist.length;i++){
                const storeObject=Todolist[i];
                const name=storeObject.name;
                const duedate=storeObject.duedate;
                const createhtml=`
                <div>${name}</div> 
                <div>${duedate}</div>
                    <button onclick="
                    Todolist.splice(${i},1);
                    displaylist();
                    " class="delete-button">Delete</button>
                   
                
                `;
                combineHTML +=createhtml;
                
            }

        console.log(combineHTML);

        document.querySelector(".list").innerHTML=combineHTML;

         }






         

         
        function AddList(){
               let inputValue=document.querySelector(".getinput").value;
               let inputduedate=document.querySelector(".duedate").value;
               Todolist.push(
                {
                    name:inputValue,
                    duedate:inputduedate
                    
                }
               );

               inputValue="";
               inputduedate="";
               displaylist();
               
        }
