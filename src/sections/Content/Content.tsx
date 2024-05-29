import React, { useEffect, useState, useMemo } from 'react';
import cls from './Content.module.scss';

import { Card } from '../../components/card/Card';

import { ContentProps, Course, CoursesArray } from '../../types';
import { ALL_THEMES } from '../../constanst';

const Content: React.FC<ContentProps> = ({ data, activeTag }) => {
  const [currentData, setCurrentData] = useState<CoursesArray>([]);

  const filterDataByTag = (data: CoursesArray, activeTag: string): CoursesArray => {
    if (activeTag === ALL_THEMES) return data;
    return data.filter((course: Course) => course.tags.includes(activeTag));
  };

  const filteredData = useMemo(() => filterDataByTag(data, activeTag), [data, activeTag]);

  useEffect(() => {
    setCurrentData(filteredData)
  }, [filteredData])

  return (
    <section className={cls.content}>
      {currentData.map((course: Course) => <Card key={course.id} {...course} />)}
    </section>
  )
};

export default Content
