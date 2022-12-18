import ErrorPage from 'next/error'
import React from 'react'
import { useAsync } from 'react-async';
import CssBaseline from '@material-ui/core/CssBaseline'

import {updateUsers,  loadUsers} from './requests'
import Styles from './Styles'
import {Table, tablecolumns} from './ReactTable'


function TableTest() {
  
  const columns = React.useMemo(() => tablecolumns(), [])
  const { data, error, isLoading } = useAsync({ promiseFn: loadUsers })

//   if (errorStatus) {
//     return <ErrorPage statusCode={errorStatus} />
// }


  if (isLoading) return "Loading..."
  if (error) return `Something went wrong: ${error.message}`
  if (data)

  return (
 
    <Styles>
      <CssBaseline />
      <Table
        columns={columns}
        data={data}
        updateMyData={updateMyData}
      />
    </Styles>
  )
}


 // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    // setData(old =>
    //   old.map((row, index) => {
    //     if (index === rowIndex) {
    //       return {
    //         ...row,
    //         [columnId]: value,
    //       }
    //     }
    //     return row
    //   })
    // )
    updateUsers(rowIndex, columnId, value);
    console.log(rowIndex, columnId, value )
    return rowIndex
  }
export default TableTest
