function pagination(currentPage, nrOfPages) {

	var pagesToShow = 3,
	    page = currentPage - pagesToShow > 0 ?  (currentPage - pagesToShow) : 1,
	    first = 0,
	    pageList = [];

		 for (let i = 0; i < (pagesToShow * 2) && page < nrOfPages; i++) {
			pageList.push(page);
                        page++;

		}
          if(pagesToShow + 2  < currentPage)
	     pageList.unshift('...');
	     pageList.unshift(1); //add first page
	
	  if(nrOfPages > 1){
	         if(nrOfPages - pagesToShow  >  currentPage)
		 pageList.push('...');
	         pageList.push(nrOfPages); //add last page
	  }

	 
    return pageList;

}//pagination

console.log(pagination(6, 20));

//sample output::: [1, "...", 4, 5, 6, 7, 8, "...", 20]
