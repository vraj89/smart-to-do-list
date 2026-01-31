const add=document.querySelector('.add');
const run=document.querySelector('.run');
const act=document.querySelector('.act');
const com=document.querySelector('.com');
let  lwtxt=document.querySelector('.lwtxt');
const input = document.querySelector('#addtsk');
const tsklist=document.querySelector('.tsklist');
let cnt=0;

add.addEventListener('click',()=>{
    let va = input.value;
    cnt++;
    lwtxt.textContent="task was added "
    let box=document.createElement('div');
   let txt = document.createElement('p');
    txt.textContent = va; 
    txt.className = 'text-4xl text-white'; // <--
    let chk=document.createElement('input');
    chk.type="checkbox";
    chk.className='w-4 h-4  cursor-pointer '

    box.dataset.status='active';
    chk.addEventListener('click',()=>{
      if(chk.checked){
        txt.classList.add('line-through','text-gray-400');
        box.dataset.status='completed';
      }
      else{
         txt.classList.remove('line-through','text-gray-400');
        box.dataset.status='active';
         

      }
        
    })

    let delet=document.createElement('button');
    delet.innerHTML='X '
    delet.className='text-red-500 cursor-pointer  text-lg ';
    delet.addEventListener('click',()=>{
        box.remove();
        cnt--;
        if(cnt==0){
            lwtxt.textContent="No task,yet added "
         }
    })
    delet.className = "text-red-500 cursor-pointer text-2xl font-bold";


    box.append(chk);
    box.append(txt);
    box.append(delet);
box.className = 'flex justify-between items-center gap-3  bg-gray-400 border-gray-600 rounded-sm mt-3 px-4';


    tsklist.append(box);
})

run.addEventListener('click',()=>{
    filterTasks('running');

})

act.addEventListener('click',()=>{
    filterTasks('active');
})

com.addEventListener('click',()=>{
    filterTasks('completed')
})

function filterTasks(status) {
  const tasks = document.querySelectorAll('.tsklist div'); // har box select hoga
  tasks.forEach(box => {
    if (status === "running") {
      box.style.display = "flex"; // sab dikhana
    } else {
      if (box.dataset.status === status) {
        box.style.display = "flex"; // sirf matching status
      } else {
        box.style.display = "none"; // hide others
      }
    }
  });
}

