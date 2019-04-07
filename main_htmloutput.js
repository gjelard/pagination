function pagination(currentPage, nrOfPages) {

	var pagesToShow = 3,
	    page = currentPage - pagesToShow > 0 ?  (currentPage - pagesToShow) : 1,
	    first = 0,
	    pageList = [];


		 for (let i = 0; i < (pagesToShow * 2) && page < nrOfPages; i++) {
			 if(currentPage == page){ //do not add the link to current page number
				  if(page != 1 && page != nrOfPages)
 			 	     pageList.push('<a href="javascript:void(0)" class="nav currentpage" data-page="'+page+'"  style="text-decoration: none;">'+page+'</a>');
				 }else{
				     if(page != 1 && page != nrOfPages)
				        pageList.push('<a href="javascript:void(0)" class="nav" data-page="'+page+'">'+page+'</a>');
				 }
                    page++;

		}

	 //add first page
	 if(pagesToShow + 2  < currentPage){
		 pageList.unshift('...');
		 pageList.unshift('<a href="javascript:void(0)" class="nav" data-page="'+1+'">'+1+'</a>');
	 }else{
	        if(currentPage == 1){
		    pageList.unshift('<a href="javascript:void(0)" class="nav currentpage" data-page="'+1+'"  style="text-decoration: none;">'+1+'</a>');
	       }else{
	            pageList.unshift('<a href="javascript:void(0)" class="nav" data-page="'+1+'">'+1+'</a>');
	        }

	 }


	 //add last page
	 if(nrOfPages > 1)
	 if(nrOfPages - pagesToShow  >  currentPage){
	     pageList.push('...');
	     pageList.push('<a href="javascript:void(0)" class="nav" data-page="'+nrOfPages+'">'+nrOfPages+'</a>');
	 }else{
	     if(nrOfPages == currentPage){
		pageList.push('<a href="javascript:void(0)" class="nav currentpage" data-page="'+nrOfPages+'"  style="text-decoration: none;">'+nrOfPages+'</a>');
	      }else{
		pageList.push('<a href="javascript:void(0)" class="nav" data-page="'+nrOfPages+'">'+nrOfPages+'</a>');
	      }

	 }

	var pagination = document.createElement('div');
	    pagination.setAttribute('id', 'pagination'); //add id
	    pagination.setAttribute('style','display: flex; margin-top:20px; justify-content: space-between;');
	var btnDisplay = document.createElement('div');
	var next = currentPage == nrOfPages || nrOfPages == 0 ? '' : ' | <a href="javascript:void(0)" class="nav" data-page="next">Next</a>';
	var prev = currentPage == 1  || nrOfPages < 1 ? '' : '<a href="javascript:void(0)" class="nav" data-page="prev">Prev</a> | ';
	    btnDisplay.innerHTML = prev + pageList.join(" ") + next;
	var pagInfo = document.createElement('div');
	    pagInfo.innerHTML = " page: "+ currentPage + " of " + nrOfPages;

   	    pagination.appendChild(btnDisplay);
	    pagination.appendChild(pagInfo);
    return pagination;

}//pagination
//pagination(12,20);
//sample output::: Prev | 1...10 11 12 13 14 15...20 | Next
