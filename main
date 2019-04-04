function pagination(currentPage, nrOfPages) {

	var pagesToShow = 3,
		  page = currentPage - pagesToShow > 0 ?  (currentPage - pagesToShow) : 1,
		  first = 0, 
	      pageList = [];
		
		if(nrOfPages > pagesToShow){
			
			for (let i = currentPage - pagesToShow; i <= currentPage + pagesToShow && page <= nrOfPages; i++) {
				
				 if(currentPage - pagesToShow > 0 && first == 0){ // add first page
					pageList.push(1);
					if(page != 1 && currentPage - pagesToShow != 2){
					pageList.push('...');
                    }else{
                     pageList.push(page);
                    }
					first = 1;
				 }else if( currentPage + pagesToShow < nrOfPages && i == currentPage + pagesToShow){ // add last page

                    if(currentPage - pagesToShow != nrOfPages && page != nrOfPages)
				      pageList.push('...');
					  pageList.push(nrOfPages);

				 }else{ //rest of the pages
					 
					 pageList.push(page); 
				 }
				 
			  page++;
			}
			
		}else{
		  
			for (var i = 1; i < nrOfPages + 1; i++) {
				 pageList.push(i);
			  
			}
		}
    return pageList;
}//pagination

console.log(pagination(6, 20));

//sample output::: [1, "...", 4, 5, 6, 7, 8, "...", 20]
