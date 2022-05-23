import { FeatureWork } from '@/components/home/featured-work';
import { CompanyList } from '@/components/company';
import { MainLayout } from '@/components/layout';
import {  Company } from '@/models';
import * as moment from 'moment/moment';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Container, Stack, Typography, Modal, TextField, Grid } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { companyApi } from '@/api-client';

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
export interface ICompanyProps {}

export default function CompanyPage(props: ICompanyProps) {
  const isEdit = useRef(false)
  const [_id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [start, setStart] = React.useState(Date.now() + '');
  const [end, setEnd] = React.useState(Date.now() + '');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [companyList, setCompanyList] = useState<Company[]>([]);

  var fromDate = new Date(parseInt(start));
  var toDate = new Date(parseInt(end));

  useEffect(() => {
    companyApi.getAll().then((data: any) => {
      setCompanyList(data);
    });
  }, []);
  const [nameProject, setNameProjetc] = React.useState();
  const handleAddCompany = () => {
    isEdit.current = false;
    handleOpen();
    setName('');
    setDesc('');
  };
  const onChangeNameProject = (e: any) => {
    setName(e.target.value);
  };
  const onChangeNameCompany = (e: any) => {
    setDesc(e.target.value);
  };
  const onChangeStart = (e: Date | null) => {
    setStart(e?.getTime() + '');
  };
  const onChangeEnd = (e: Date | null) => {
    setEnd(e?.getTime() + '');
  };
  const handleOpenModal = (id: string) => {
    const companies = companyList.find((company: Company) => company._id === id);
    if (companies) {
      handleOpen();
      isEdit.current = true;
      setName(companies?.companyName || '');
      setDesc(companies?.description || '');
      setId(id);
    }
  };

  const handleAdd = () => {
    companyApi
      .addCompany({
        _id: '',
        companyName: name,
        position: 'Fullstack',
        from: start,
        to: end,
        description: desc,
      })
      .then((data: any) => {
        handleClose();
        const companies : Company[]= [
          ...companyList,
          { 
            _id:data._id,
            companyName: name,
            position: 'Fullstack',
            from: start,
            to: end,
            description: desc,
          },
        ];
        setCompanyList(companies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = () => {
    companyApi
      .updateCompany({
        _id: _id,
        companyName: name,
        position: 'Fullstack',
        from: start,
        to: end,
        description: desc,
      })
      .then((data: any) => {
        handleClose();
        setCompanyList([...companyList].map((company) =>{
          return (company._id === _id) ? {
            _id: _id,
            companyName: name,
            position: 'Fullstack',
            from: start,
            to: end,
            description: desc,
          } : company
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box component="div" pt={2} pb={4}>
      <Box>
        <Button
          onClick={handleAddCompany}
          sx={{ marginLeft: '80%', marginBottom: '30px' }}
          size="small"
          variant="outlined"
        >
          Thêm{' '}
        </Button>
      </Box>
      <CompanyList companies={companyList} handleOpen={handleOpenModal} />
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
            value={name}
            defaultValue={name}
            onChange={onChangeNameProject}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mb={3} mt={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Grid container spacing={2} mt={2}>
                <Grid item xs={6}>
                  <DesktopDatePicker
                    label="From"
                    inputFormat="MM/dd/yyyy"
                    value={fromDate}
                    onChange={onChangeStart}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <DesktopDatePicker
                    label="To"
                    inputFormat="MM/dd/yyyy"
                    value={toDate}
                    onChange={onChangeEnd}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Grid>
              </Grid>
            </LocalizationProvider>
          </Box>
          <TextField
            required
            id="outlined-required"
            label="Mô tả"
            value={desc}
            onChange={onChangeNameCompany}
          />
          {
            isEdit ? ( <Button
              onClick={handleEdit}
              sx={{ marginLeft: '80%', marginTop: '160px' }}
              size="small"
              variant="outlined"
            >
              Sửa {' '}
            </Button>
          ): ( <Button
            onClick={handleAdd}
            sx={{ marginLeft: '80%', marginTop: '160px' }}
            size="small"
            variant="outlined"
          >
            Thêm{' '}
          </Button>)
          }
         </Box>
      </Modal>
    </Box>
  );
}

CompanyPage.Layout = MainLayout;
