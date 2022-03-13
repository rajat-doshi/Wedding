let api_url = `http://3.111.188.157:3001`;
let file_url =  `http://3.111.188.157:3001/files/`;
if(typeof window !== "undefined"){
   if(window.location.hostname!=="localhost"){
     api_url='http://3.111.188.157:3001';
     file_url = 'http://3.111.188.157:3001/files/';
   }
}
export const Api_Url = api_url;
export const FileUrl = file_url;