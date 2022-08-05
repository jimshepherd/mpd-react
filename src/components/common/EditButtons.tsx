import React, { Fragment, useState } from 'react';
import { Button, Typography } from '@mui/material';
import SingleSelect from './SingleSelect';

import { DELETE_REASONS, DeleteReason, itemEditStyles } from './ItemEdit';


type Props = {
  errorMessage?: string|null,
  formId?: string,
  disableSave?: boolean,
  hideButtons?: boolean,
  hideDelete?: boolean,
  hideError?: boolean,
  onCancel?: () => void,
  onDeleteRequested?: (reason: DeleteReason) => void,
  onSave?: () => void,
  submitButtonLabel?: string,
  variant?: 'outlined' | 'text' | 'contained',
}

const EditButtons = (props: Props) => {

  const {
    errorMessage, formId,
    disableSave=false,
    hideButtons=false, hideDelete=false, hideError=false,
    onCancel, onDeleteRequested, onSave,
    submitButtonLabel, variant,
  } = props;
  const editClasses = itemEditStyles;

  const [deleteRequested, setDeleteRequested] = useState<boolean>(false);
  const [deleteReason, setDeleteReason] = useState<DeleteReason|null>(null);

  const handleDelete = () => {
    setDeleteRequested(true);
  };

  const handleDeleteReason = (reason: DeleteReason) => {
    setDeleteReason(reason);
    onDeleteRequested && onDeleteRequested(reason);
  };

  const renderButtons = () => {
    if (hideButtons) {
      return null;
    }

    return (
      <Fragment>
        {!hideDelete &&
          (deleteRequested
            ?
              <SingleSelect
                label='Delete Reason'
                name='deleteReason'
                items={DELETE_REASONS}
                value={deleteReason}
                onChange={handleDeleteReason}
              />
            :
              <Button
                sx={editClasses.deleteButton}
                onClick={handleDelete}
                color='secondary'
                variant={variant}
              >
                Delete
              </Button>
          )
        }
        {onCancel &&
          <Button
            sx={editClasses.cancelButton}
            color='primary'
            variant={variant}
            onClick={() => onCancel()}
          >
            Cancel
          </Button>
        }
        {onSave === undefined
          ?
            <Button
              sx={editClasses.submitButton}
              color='primary'
              type='submit'
              form={formId}
              variant={variant}
              disabled={disableSave || (deleteRequested ? deleteReason == null : false)}
            >
              {deleteRequested ? 'Confirm Delete' : (submitButtonLabel || 'Save')}
            </Button>
          :
            <Button
              sx={editClasses.submitButton}
              color='primary'
              variant={variant}
              disabled={disableSave || (deleteRequested ? deleteReason == null : false)}
              onClick={onSave}
            >
              {deleteRequested ? 'Confirm Delete' : (submitButtonLabel || 'Save')}
            </Button>
        }
      </Fragment>
    );
  }

  return (
    <div className={JSON.stringify(editClasses.actions)}>
      {renderButtons()}
      {!hideError &&
        <Typography
          sx={editClasses.errorText}
          color='error'
          variant='body1'
        >
          {errorMessage || ''}
        </Typography>
      }
    </div>
  );

}

export default EditButtons;
