import axios from 'axios';
import React, {
  FunctionComponent,
  ReactNode,
  useState,
} from 'react';
import { useNavigate } from 'react-router';
import {
  Box, Button,
  Paper,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography,
} from '@mui/material';

import ItemEdit, { itemEditStyles } from '../common/ItemEdit';
import ItemView, { itemViewStyles, BUTTON_VARIANT } from '../common/ItemView';
import LabeledText from '../common/LabeledText';
import TextEdit from '../common/TextEdit';
import useGetTestPlan from '../../graphql/hooks/useGetTestPlan';
import {FormErrors, InputEvent, SelectEvent} from '../../helpers/useFormValidation';
import { Item, TestPlan } from '../../models';


class Test extends Item {
  testPlanId?: string;
  name?: string;
  lot?: string;
  cavities?: string;
}

function validateTest(values: Test) {
  let errors: FormErrors<Test> = {};

  // Name Errors
  if (!values.name) {
    errors.name = 'Name required';
  } else if (values.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Lot Errors
  if (!values.lot) {
    errors.lot = 'Lot required';
  } else if (values.lot.length < 2) {
    errors.lot = 'Lot must be at least 2 characters';
  }

  return errors;
}

const INITIAL_VALUE = new Test();

interface Props {
  testPlan?: TestPlan | null,
  id?: string|null,
  model?: typeof TestPlan,
  typeName?: string,
  additionalFieldRenderer?: (item: TestPlan|null) => ReactNode,
  editDialog?: ReactNode,
}

export const TestPlanView: FunctionComponent<Props> = props => {

  const {
    testPlan, id,
    model=TestPlan,
  } = props;

  //console.log('TestPlanView', testPlan);

  const editClasses = itemEditStyles;
  const viewClasses = itemViewStyles;
  const navigate = useNavigate();

  const [_test, setTest] = useState<Test|null>();
  const [testPlanId, setTestPlanId] = useState<string|null>();

  //const [getTestPlanDownload, { loading, error, data }] = useLazyQuery(GET_DOG_PHOTO);

  //const {canContribute} = useContext(AuthContext);

  const handleTestPlanDownload = async (test?: Test|null) => {
    console.log('test', id, test?.id, test);

    // Automatically download the Test Excel File
    window.location.href = 'http://localhost:8000/create_test'
      + `?id=${testPlanId}`
      + `&name=${test?.name}`
      + `&lot=${test?.lot}`
      + `&cavities=${test?.cavities}`;

    //await navigate(`http://localhost:8000/create_test_plan?id=${testPlanId}&name=${testName}&lot=${testLot}&num_molds=${numMolds}`);
    //navigate(-1);
    /*
    axios({
        url: `http://localhost:8000/create_test_plan?id=${testPlanId}&name=${testName}&lot=${testLot}&num_molds=${numMolds}`,
        method: 'GET',
        responseType: 'blob', // important
    })
     */
      /*.then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
    });
    */
  }

  const renderView = (item: TestPlan|null) => {

    return (
      <Box sx={viewClasses.root}>
        <LabeledText
          label='Name'
          text={item?.name}
        />
        <LabeledText
          label='Description'
          text={item?.description}
        />
        <LabeledText
          label='Master Specifications'
          text={item?.specification?.name}
        />
        <LabeledText
          label='Product'
          text={item?.product?.name}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='mics'>
            <TableHead>
              <TableRow>
                <TableCell>MIC Id</TableCell>
                <TableCell align='left'>MIC Name</TableCell>
                <TableCell align='left'>Sample&nbsp;Type</TableCell>
                <TableCell align='center'>Sample&nbsp;Size</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {item?.mics?.map((mic) => (
                <TableRow
                  key={mic.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {mic.micId}
                  </TableCell>
                  <TableCell align='left'>{mic.name}</TableCell>
                  <TableCell align='left'>{mic.sampleType}</TableCell>
                  <TableCell align='center'>{mic.sampleSize}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };


  const renderFields = (
    originalItem: Test|null,
    formItem: Test|null,
    formErrors: FormErrors<Test>,
    handleBlur: ()=> void,
    handleChange: (event: InputEvent|SelectEvent) => void,
  ) => {

    console.log('originalItem', originalItem);
    console.log('formItem', formItem);
    return (
      <Box sx={editClasses.form}>
        <Typography
          sx={editClasses.title}
          variant='h2'
        >
          Create Test From Test Plan
        </Typography>
        <TextEdit
          error={formErrors.name}
          label='Name'
          name='name'
          onChange={handleChange}
          value={formItem?.name}
        />
        <TextEdit
          error={formErrors.lot}
          label='Lot'
          name='lot'
          onChange={handleChange}
          value={formItem?.lot}
        />
        <TextEdit
          error={formErrors.cavities}
          label='Cavities per Mold Round'
          tooltip='Comma separated list of cavity ids'
          name='cavities'
          onChange={handleChange}
          value={formItem?.cavities}
        />
      </Box>
    );
  };

  return (
    <Box>
      <ItemView
        item={testPlan}
        id={id}
        useGetGraphQL={useGetTestPlan}
        useGetGraphQLProps={{model: model}}
        viewRenderer={renderView}
        onIdChange={setTestPlanId}
      />
      <ItemEdit
        item={_test}
        defaultValue={INITIAL_VALUE}
        fieldRenderer={renderFields}
        validator={validateTest}
        hideCancel
        hideDelete
        submitButtonLabel='Create Test'
        onComplete={i => handleTestPlanDownload(i)}
        noBack
      />
    </Box>
  )
};

export default TestPlanView;
