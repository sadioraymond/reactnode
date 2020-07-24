import React from 'react';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { TextArea } = Input;
const gettingFileUrl = "http://localhost:5000/file/fileToedit";
const savingFileUrl = "http://localhost:5000/file/savingFile";
const text = "Edition du fichier";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      text: ''
    };
  }
  componentDidMount() {
    axios.get(gettingFileUrl)
      .then(responseJson => {
        this.setState({ value: responseJson.data.data.fileData, text: text + " " + responseJson.data.data.fileName });
      }).catch(function (error) {
        console.log(error);
      })
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  saveFile = () => {
    const headers = {
      'Content-Type': 'application/json'
    }
    const toastOptions = { autoClose: 1000 };
    axios.post(savingFileUrl, this.state, { headers: headers })
      .then((res) => {
        toast.success("Le fichier a bien été sauvegardé. !", toastOptions);
      }).catch((error) => {
        console.log(error);
        toast.error("Une erreur s'est produite lors de l'enregistrement du fichier.", toastOptions);
      });
  };
  render() {
    const { value } = this.state;
    return (
      <>
        <div className="labelInput">
          <Input value={this.state.text} disabled={true} />
        </div>
        <div className="textareaDiv">
          <TextArea
            value={value}
            onChange={this.onChange} size="middle"
            autoSize={{ minRows: 8, maxRows: 8 }}
          />
        </div>
        <div className="buttonDiv">
          <Button type="primary" onClick={this.saveFile} >Save</Button>
        </div>
        <ToastContainer />
      </>
    );
  }
}

export default Demo;


