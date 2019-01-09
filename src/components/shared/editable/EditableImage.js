import React from 'react';
import { EditableComponent } from './EditableComponent';
import { FileUpload } from '../form/FileUpload';

export class EditableImage extends EditableComponent {

  constructor() {
    super();
  }

  handleImageUpload = (image) => {
    this.setState({value: image});

    this.update();
  }

  render() {
    const { isActive, value } = this.state;

    return (
      <div className='editableComponent'>
        { !isActive &&
          <React.Fragment>
            <img src={value} alt='' style={{height: '360px'}}/>
            <i className='fa fa-edit' style={{cursor: 'pointer'}} onClick={() => this.enableEdit()}></i>

            {/* <button onClick={() => this.enableEdit() }
                className='btn btn-warning btn-editable btn-editable-image'
                type='button'> Edit
            </button> */}
          </React.Fragment>
        }

        { isActive &&
          <React.Fragment>
            <button onClick={() => this.disableEdit() }
                  className='btn btn-danger btn-editable btn-editable-image'
                  type='button'> Close
            </button>
            <FileUpload onChange={this.handleImageUpload}></FileUpload>
          </React.Fragment>
        }
      </div>
    )
  }
}
