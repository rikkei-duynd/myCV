import { MainLayout } from '@/components/layout';
import { DialogEditProject, ProjectList } from '@/components/work';
import { DialogDeleteProject } from '@/components/work/dialog-delete-project';
import DialogViewProject from '@/components/work/dialog-view-project';
import { Project } from '@/models';
import { Add } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

export interface IWorkPageProps {
}

export default function WorkPage(props: IWorkPageProps) {
  const [projectList, setProjectList] = useState<Project[]>([
    {
      id: '1',
      name: 'Flooding Map        ',
      from: '1580543823000',
      to: '1599724623000',
      description: `
    I. Purpose
    <p>Research possible flood scenarios in the area with different timings
    </p>
    II. Content 

    
    <p>Viewer: </p>
    <p>Check the information about flood on the map with different scenarios and times
    </p>
    <p>Has the function of automatically displaying the inundation situation over time
    </p>

    <p>Builder: 
    </p>
    <p>Add, edit, delete scenarios
    </p>
    <p>Add, edit, delete flooding information
    </p>
    III. Trình duyệt hỗ trợ
    <p>Web browse</p>
    `,
      thumbnailUrl: 'https://images.unsplash.com/photo-1485617359743-4dc5d2e53c89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      database: 'Sql server',
      programingLanguages:
        'Google Api , Angular 12, .Net Framework, Sql server, Mapbox GL js, PrimeNG, Material, Turf js, ng-bootstrap, SQL Server, HTML, CSS,1 số dịch vụ của eKMap…  ',
      teamSize: 6,
      responsibilities: `
    I. Main responsibilities:
    <p>1. Development</p>
    <p>Design database

    </p>
    <p>2. Frontend</p>
    <p>Design UI

    </p>
    <p>Get data from Backend</p><p>Display information on the interface
    </p>
    <p>3. Test , Fixbug</p>`,
      technologies: 'Angular, .Net Framework',
      tools:
        'Window, Visual studio code, visual studio, Postman, notepad++',
      srcCode: '',
      url: '',
    },
    {
      id: '2',
      name: 'RealEstate       ',
      from: '1580543823000',
      to: '1599724623000',
      description: `
    I. Purpose
    <p>Application for real estate companies, allowing to manage real estate information on the map
    </p>
    II. Content 
    <p>Viewer: </p>
    <p>Add, edit, delete 
    </p>
    <p>Open the list of real estate 
    </p>
    <p>Open the planning map
    </p>
    <p>Upload data files to the map
    </p>
    <p>Planning analysis
    </p>
    <p>Look up information on the map
    </p>
    <p>Builder: 
    </p>
    <p>Configure display data
    </p>
    III. Trình duyệt hỗ trợ
    <p>Web browse</p>
    `,
      thumbnailUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',

      database: 'Sql server',
      programingLanguages:
        'Google Api , Angular 12, .Net Framework, Sql server, Mapbox GL js, PrimeNG, Material, Turf js, ng-bootstrap, SQL Server, HTML, CSS,1 số dịch vụ của eKMap… ',
      teamSize: 4,
      responsibilities: `
    I. Main responsibilities:
    <p>1. Development</p>
    <p>Design database
    </p>
    <p>2. Frontend</p>
    <p>Design UI
    </p>
    <p>Get data from Backend</p><p>Display information on the interface
    </p>
    <p>3. Test , Fixbug</p>`,
      technologies: 'Angular, .Net Framework',
      tools:
        'Window, Visual studio code, visual studio, Postman, notepad++',
      srcCode: '',
      url: '',
    },
    {
      id: '3',
      name: 'eKMap pipe  ',
      from: '1580543823000',
      to: '1599724623000',
      description: `
    I. Purpose
    <p> Application to manage flushing plans, pipe flushing plans
    </p>
    II. Content 
    <p>Viewer: </p>
    <p>1. Flushing Plans Mangement

    </p>
    <p>a. List of option

    </p>
    <p>b. Add, edit, delete option

    </p>
    <p>c. Add detail option
    </p>
    <p>d. Add rinsing result
    </p>
     <p>e. History of rinsing
    </p>
     <p>2. Construction Unit Management 
    </p>
     <p>a. Add, edit, delete Construction Unit
    </p>
    <p>b. Look for Construction Unit
    </p>
    <p>c. Import list of Construction Unit from Excel
    </p>
    <p>Builder: 
    </p>
    <p>Configure display data
    </p>
    III. Trình duyệt hỗ trợ
    <p>Web browse</p>
    `,
      thumbnailUrl: 'https://images.unsplash.com/photo-1538474705339-e87de81450e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      database: 'Sql server',
      programingLanguages:
        'Google Api , Angular 13, .Net Core 5, Sql server, Mapbox GL js, PrimeNG, Material, Turf js, ng-bootstrap, SQL Server, HTML, CSS,1 số dịch vụ của eKMap…  ',
      teamSize: 5,
      responsibilities: `
    I. Main responsibilities:
    <p>1. Development</p>
    <p>Design database
    </p>
    <p>2. Frontend</p>
    <p>Design UI
    </p>
    <p>Get data from Backend</p><p>Display information on the interface
    </p>
    <p>3. Test , Fixbug</p>`,
      technologies: 'Angular, .Net Framework',
      tools:
        'Window, Visual studio code, visual studio, Postman, notepad++',
      srcCode: '',
      url: '',
    },
  ])

  const [openDialogView, setOpenDialogView] = React.useState(false);
  const [openDialogEdit, setOpenDialogEdit] = React.useState(false);
  const [openDialogDelete, setOpenDialogDelete] = React.useState(false);

  const [selectedValue, setSelectedValue] = React.useState<Project | null>(null);

  const handleOpenAddDialog = () => {
    setSelectedValue(null);
    setOpenDialogEdit(true);
  };

  const handleClose = (value: Project | null) => {
    setOpenDialogView(false);
    setOpenDialogEdit(false);
    setOpenDialogDelete(false);
    setSelectedValue(value);
  };
  const handleAddProject = (value: Project) => {
    value.id = (projectList.length + 1) + '';
    setProjectList([...projectList, value]);
    setOpenDialogEdit(false);
  };

  const handleEditProject = (value: Project) => {
    setProjectList([...projectList].map((project) =>{
      return (project.id === value.id) ? value : project
    }));
    setOpenDialogEdit(false);
  };

  const handleDeleteProject = (value: Project) => {
    setProjectList([...projectList].filter((project)=>{
      return project.id !== value.id
    }));
    setOpenDialogDelete(false);
  };

  const handleOpenDialogViewProject = (value: Project) => {
    setSelectedValue(value);
    setOpenDialogView(true);
  }

  const handleOpenDialogEditProject = (value: Project) => {
    setSelectedValue(value);
    setOpenDialogEdit(true);
  }


  const handleOpenDialogDeleteProject = (value: Project) => {
    if(!value) return;
    setSelectedValue(value);
    setOpenDialogDelete(true);
  }

  return (
    <Box component='section' pt={2} pb={4}>
     {
        openDialogView && selectedValue? (<DialogViewProject
          selectedValue={selectedValue}
          open={openDialogView}
          onClose={handleClose}
        />) : ''
      }
      {
        openDialogDelete && selectedValue? (<DialogDeleteProject
          selectedValue={selectedValue}
          open={openDialogEdit}
          onClose={handleClose}
          onDelete={handleDeleteProject}
        />) : ''
      }
      <Container>
        <Stack direction='row' mb={2} justifyContent='space-between'>
          <Typography>
          </Typography>
          <Button  variant="contained" onClick={handleOpenAddDialog}  sx={{mb:2}} startIcon={<Add/>}>
            Add project
          </Button>
          {
            openDialogEdit ? (<DialogEditProject
              selectedValue={selectedValue}
              open={openDialogEdit}
              onClose={handleClose}
              onAdd={handleAddProject}
              onEdit={handleEditProject}

            />) : ''
          }
        </Stack>
        <ProjectList projects={projectList} onEditItemProject={handleOpenDialogEditProject} onDeleteditItemProject={handleOpenDialogDeleteProject} onViewItemProject={handleOpenDialogViewProject} viewType='edit' />
      </Container>
    </Box>
  );
}
WorkPage.Layout = MainLayout
