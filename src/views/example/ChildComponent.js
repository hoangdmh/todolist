import React from "react";

/* Class component */
class ChillComponent extends React.Component {

    state = {
        isShow: false
    }

    handleShow = () => {
        // console.log('handleShow');
        this.setState({
            isShow: !this.state.isShow
        })
    }

    handleDeleteTask = (id) => {
        let idTask = id;
        this.props.handleDeleteTask(idTask)
        // console.log('handleDeleteTask idTask', idTask);
    }

    render() {
        let { listTask } = this.props;
        let { isShow } = this.state;

        return (
            <>
                {!isShow ?
                    <button onClick={() => this.handleShow()}>Show</button>
                    :
                    <>
                        <div className="list-task">
                            {
                                listTask.map((item, index) => {
                                    if (item.price >= 500) {
                                        return (
                                            <div key={item.id}>
                                                {item.task} - {item.price}$ <span onClick={() => this.handleDeleteTask(item.id)}>X</span>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div >

                        <button onClick={() => this.handleShow()}>Hide</button>
                    </>
                }
            </>
        )
    }
}


/* Function component */
// const ChillComponent = (props) => {
//     let { name, age, listTask } = props
//     return (
//         <>
//             <h2>Child component</h2>
//             <p>{name} - {age}</p>
//             {
//                 listTask.map((item, index) => {
//                     return (
//                         <div className="list-task" key={item.id}>
//                             {item.task}
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }

export default ChillComponent