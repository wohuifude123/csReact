import React from 'react';
import ImgShow from './component/jsx/ImgShow.jsx';

class StaffHeader extends React.Component{
    render(){
        return (
            <div>

                <table className="optHeader">
                    <tbody>
                    <tr>
                        <td className="headerTd"><input type='text' placeholder='Search...' /></td>
                        <td className="headerTd">
                            <label for='idSelect'>人员筛选</label>
                            <select id='idSelect'>
                                <option value='0'>全部</option>
                                <option value='1'>主任</option>
                                <option value='2'>老师</option>
                                <option value='3'>学生</option>
                                <option value='4'>实习</option>
                            </select>
                        </td>
                        <td>
                            <label for='orderSelect'>排列方式</label>
                            <select id='orderSelect'>
                                <option value='0'>身份</option>
                                <option value='1'>年龄升</option>
                                <option value='2'>年龄降</option>
                            </select>
                        </td>



                    </tr>
                    </tbody>
                </table>
                <ImgShow />
            </div>
        );
    }
}

export default StaffHeader;