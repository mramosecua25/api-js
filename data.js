const PDFMerge = require('pdf-merge');
const scissors = require('scissors');
const fs = require('fs');


var pdf = scissors(`${__dirname}/b3a0efd0-bbf2-11ea-b8cf-759577107bca.pdf`).pages(1,2);

pdf.pdfStream()
   .pipe(fs.createWriteStream(`${__dirname}/shb3a0efd0-bbf2-11ea-b8cf-759577107bca.pdf`))
   .on('finish', function(){
      const files = [
          `${__dirname}/534dd-719897d0-bc76-11ea-ad52-59c453cb2f46.pdf`,
          `${__dirname}/534dd-14986480-bbf3-11ea-a7b1-fddf701f9efb.pdf`,
          `${__dirname}/shb3a0efd0-bbf2-11ea-b8cf-759577107bca.pdf`,
      ];
            
      //Save as new file
      PDFMerge(files, {output: `${__dirname}/3.pdf`})
      .then((buffer) => {
          console.log("ok");
      });
   }).on('error',function(err){
     throw err;
   });

