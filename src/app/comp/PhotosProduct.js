import React, {Component} from 'react'
import Dropzone from 'react-dropzone'

class PhotosProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            files: [],
            limit: 6,
            imgLimit: 6
        }
        this.onCancel = this.onCancel.bind(this);
        this.onCancelAll = this.onCancelAll.bind(this);
        this.renderImages = this.renderImages.bind(this);
        this.renderBlock = this.renderBlock.bind(this);
    }

    onDrop(arrFiles) {
        console.log("test ", arrFiles);
        if (arrFiles.length <= this.state.limit && arrFiles.length > 0 && arrFiles != []) {
            this.setState({limit: this.state.limit - arrFiles.length});
            arrFiles.map((file) => {
                this.state.files.push(file);
                this.state.images.push(file);
            });
            this.props.onChange('photos', this.state.files);
        } else {
            alert('You\'ve reached the limit of uploaded files or file is too big!')
        }
    }

    renderImages(images) {
        return images.map((file, i) => {
            if (file !== null) {
                return (
                    <div key={i}
                         style={{background: `url(${URL.createObjectURL(file)})`}}/>
                )
            }
        });
    };

    renderBlock(images) {
        let len = images.length;
        let array = [];
        while (len < 6) {
            array.push(null);
            len++;
        }
        return array.map((a, i) => (
            <div key={Math.random().toString(36).substr(2, 9)}/>
        ));
    };

    onCancel() {

    }

    onCancelAll() {
        this.props.onChange('photos', []);
        this.setState({
            images: [],
            files: [],
            limit: 6,
            imgLimit: 6
        });
    }

    render() {
        return (
            <div className="items-group">
                <div className="row">
                    <div className="col">
                        <label className='float-left bold-500'>Photos of product</label>
                    </div>
                </div>
                <div className="row-flex">
                    <div className="flex-row">
                        {this.renderImages(this.state.images)}
                        {this.renderBlock(this.state.images)}
                    </div>
                    <div className="text-center">
                        <span>Upload photos</span><br/>
                        <span className="info-upload">Upload photos (*.jpg / *.png / *.gif not more 250 kB)</span><br/>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Dropzone
                                maxSize={250000}
                                accept="image/*"
                                onDrop={this.onDrop.bind(this)}
                                onFileDialogCancel={this.onCancel.bind(this)}
                            >
                                {({getRootProps, getInputProps}) => (
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <button className="btn-upload">Choose files</button>
                                    </div>
                                )}
                            </Dropzone>
                            <button className="btn-upload" onClick={this.onCancelAll}>x</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default PhotosProduct;