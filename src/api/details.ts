
/** Function to get the loan details from the api
 * Returns Array
 */
async function getDetails(currentPage) {
    try {
      const response = await fetch(`http://localhost:3001/api/applications?_page=${currentPage}&_limit=5`);
      
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  export {getDetails}