import React, {createRef, useState} from 'react';
import {makeStyles, TextField, Grid, IconButton} from "@material-ui/core";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    fileInput: {
        display: 'none'
    },
    gridInput: {
        flexGrow: 1,
        marginRight: theme.spacing(2)
    }
}));

const FileInput = ({changedFile, name, label, error, id}) => {
    const classes = useStyles();
    const [filename, setFilename] = useState('');
    const fileInputRef = createRef();

    const onChangeFilename = e => {
        if (e.target.files[0]) {
            setFilename(e.target.files[0].name);
        } else {
            setFilename('');
        }

        changedFile(e);
    };

    return (
        <>
            <input
                type='file'
                name={name}
                className={classes.fileInput}
                ref={fileInputRef}
                onChange={e => onChangeFilename(e)}
                id='form-pic-image-inp'
            />
            <Grid
                container
                alignItems='center'
                direction='row'
            >
                <Grid
                    item
                    className={classes.gridInput}
                >
                    <TextField
                        fullWidth
                        id={id}
                        variant='outlined'
                        value={filename}
                        label={label}
                        onClick={() => fileInputRef.current.click()}
                        disabled
                        error={!!error}
                        helperText={error}
                    />
                </Grid>
                <Grid item>
                    <IconButton onClick={() => fileInputRef.current.click()}>
                        <PhotoCameraIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
};

FileInput.propTypes = {
    changedFile: PropTypes.func,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.any,
    id: PropTypes.string.isRequired
};

export default FileInput;