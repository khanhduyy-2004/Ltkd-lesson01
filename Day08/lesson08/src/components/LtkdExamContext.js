import React, { useContext, useEffect, useState } from 'react'
import LtkdExamInfo from './LtkdExamInfo'

import { ThemeContext } from './LtkdExampleContext';

export default function LtkdExamContext() {
    let theme = useContext(ThemeContext);
   
  return (
    <div>
        <p className={theme}>
            Áp dụng:
            <br/>
            <span className={theme}>
                useContext là một React Hook cho phép truy cập dữ liệu từ Context mà không cần phải truyền props qua nhiều cấp (tránh tình trạng props drilling).
            </span>
        </p>
        <LtkdExamInfo />
    </div>
  )
}