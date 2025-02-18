const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

exports.deleteEmployee = async (req, res, next) => {
  const empId = req.params.id;
  if (!empId)
    return res.status(400).json({ message: "id is required" });
  const empIndex = employee.findIndex(emp => emp.id === empId);
  if (empIndex === -1)
    return res.status(404).json({ message: "Employee doesn't exist" });
  employee.splice(empIndex, 1);
  res.status(200).json({ message: "Employee deleted successfully" });
};

exports.createEmployee = async (req, res, next) => {
  const name=req.body.name;
  const id=req.body.id;
  if(!name || !id)
    return res.status(400).json({message:"name and id are required"});
  const empIndex=employee.findIndex(emp=>emp.id===id);
  if(empIndex!==-1)
    return res.status(400).json({message:"Employee exists with the same id"});
  employee.push({id:id,name:name});
  res.status(201).json({message:"Employee created successfully"});
};