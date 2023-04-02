import { Box } from "@mui/system";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'NO', width: 10 },
    {
      field: 'name',
      headerName: 'NAME',
      width: 140,
      editable: true,
    },
    {
      field: 'firstJun',
      headerName: 'Jun',
      width: 65,
      editable: true,
    },
    {
        field: 'firstJul',
        headerName: 'Jul',
        width: 65,
        editable: true,
    },
    {
        field: 'firstAug',
        headerName: 'Aug',
        width: 65,
        editable: true,
    },
    {
        field: 'firstSep',
        headerName: 'Sep',
        width: 65,
        editable: true,
    },
    {
        field: 'firstOct',
        headerName: 'Oct',
        width: 65,
        editable: true,
    },
    {
        field: 'firstNov',
        headerName: 'Nov',
        width: 65,
        editable: true,
    },
    {
        field: 'firstDec',
        headerName: 'Dec',
        width: 65,
        editable: true,
    },
    {
        field: 'firstJan',
        headerName: 'Jan',
        width: 65,
        editable: true,
    },
    {
        field: 'firstFeb',
        headerName: 'Feb',
        width: 65,
        editable: true,
    },
    {
        field: 'firstMar',
        headerName: 'Mar',
        width: 65,
        editable: true,
    },
    {
        field: 'firstApr',
        headerName: 'Apr',
        width: 65,
        editable: true,
    },
    {
        field: 'firstMay',
        headerName: 'May',
        width: 70,
        editable: true,
    },
    {
        field: 'total',
        headerName: 'TOTAL',
        width: 100,
        editable: true,
    },
    {
        field: 'balance',
        headerName: 'BALANCE',
        width: 100,
        editable: true,
    },
  ];
  
  const rows = [
    { id: 1, name: 'Akif Rahman', firstJun: 250,firstJul: 250,firstAug: 250,firstSep: 250,firstOct: 250,firstNov: 250,firstDec: 250,firstJan: 250,firstFeb: 250,firstMar: 250,firstApr: 250,firstMay: 250,total: 2500, balance: 500},
  ];

const ConfirmationList = () => {

    return ( 
            <>
                <Box width={'100%'} height={'90vh'} sx={{ pt: 10 , backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUI5rwTQXnMRknLhySV-D_EgIUKt-ZDvQJTt8u9DLeMHn39OfhkKXR_hS3WZ9I0kjyB4&usqp=CAU")' }}>
                    <Box sx={{ textAlign:'center' , color:'#fff' , textDecoration:'underline' }}>
                        <h2>CONFIRM LIST</h2>
                    </Box>
                        <DataGrid
                        sx={{ color:'#fff' , borderRadius:'10px' , m: 0.5 , border:'3px solid #000'  }}
                            rows={rows}
                            columns={columns}
                            disableRowSelectionOnClick
                            slots={{ toolbar: GridToolbar }}
                        />
                    </Box>
            </>
    );
}
 
export default ConfirmationList;