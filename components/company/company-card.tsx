import { Company } from '@/models';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Chip, Stack, Typography, List, ListItem, Button, Modal, TextField } from '@mui/material';
import { margin } from '@mui/system';
import Image from 'next/image';
import * as React from 'react';
import addWeeks from 'date-fns/addWeeks';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import moment from 'moment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
export interface ICompanyCardProps {
  company: Company;
}
const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function getWeeksAfter(date: Date | null, amount: number) {
  return date ? addWeeks(date, amount) : undefined;
}
export function CompanyCard({ company }: ICompanyCardProps) {
  const [value, setValue] = React.useState<DateRange<Date>>([new Date('01-01-2022'), new Date('01-10-2022')]);
  const [open, setOpen] = React.useState(false);
  const [nameCompany, setNameCompany] = React.useState(company.companyName);
  const [desc, setDesc] = React.useState(company.desc);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(nameCompany)
  const handleChange = () => ({})
  const onChangeNameCompany = (e: any) => setNameCompany(e.target.value);
  return (

    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    }}>
      <Box>
        <Stack direction="column" height='100%'>

          <Typography component="h1" variant="h5" mb={1}>
            {company.companyName}
          </Typography>

          <Box>
            <Chip color="default" label={moment(company.from).format("DD/MM/YYYY") + ' - ' + moment(company.to).format("DD/MM/YYYY")} />
          </Box>
          <Typography component="h6" variant="h6" mb={1}>
            {company.desc}
          </Typography>

        </Stack>

      </Box>
      <Box >
        <Button onClick={handleOpen} size="small" variant="outlined">Sửa
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style}>
          <TextField
            required
            id="outlined-required"
            label="Tên công ty"
            defaultValue="Hello World"
            value={nameCompany}
            onChange={onChangeNameCompany}
            sx={{ marginBottom: '16px' }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', }} mb={3}>

            <TextField
              id="date"
              label="from"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 200 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="to"
              type="date"
              defaultValue="2017-05-24"
              sx={{ width: 200 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <TextField
            required
            id="outlined-required"
            label="Mô tả"
            defaultValue="Hello World"
            value={desc}
            onChange={onChangeNameCompany}

          />
        </Box>
      </Modal >
    </Box >
  );
}
