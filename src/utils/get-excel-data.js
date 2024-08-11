import { read, utils } from 'xlsx';

const getExcelData = async fileData => 
    {
        return new Promise((resolve, reject) => 
        {
            const reader = new FileReader();
    
            reader.onload = e => 
            {
                const excelData = new Uint8Array(e.target.result)
                
                //parse the array buffer 
                const workbook = read(excelData, { type: 'array' }); 

                //get the first worksheet
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                
                //generate objects and update state 
                const jsonData = utils.sheet_to_json(worksheet);

                resolve(jsonData);
            }

            reader.onerror = err => reject(err)

            reader.readAsArrayBuffer(fileData);
        })
    };

export default getExcelData;