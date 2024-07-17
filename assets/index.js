const itemInput = document.getElementById('item');
const todoTimeInput =document.getElementById('time');
const saveBtn = document.getElementById('save');
const tableBody = document.getElementById('tableBody');

// pick values to a the given element
const getElementValue = (element) => {
  return element.value;
}
// on button click

saveBtn.addEventListener("click", (event)=>{
  event.preventDefault();

  // pick the value of the task name

  const itemValue=getElementValue(itemInput);
  const todoTimeValue = getElementValue(todoTimeInput);

  const tableRow = document.createElement("tr");

  const itemId = document.createElement("td");
  
  itemId.innerHTML = itemValue;
  tableRow.appendChild(itemId);

  const toDoTimeTd = document.createElement("td");
  toDoTimeTd.innerHTML = toDoTimeTdValue;
  tableRow.appendChild(toDoTimeTd);

  tableBody.appendChild(tableRow);

})