import { useEffect, useState, useMemo } from 'react';
import cls from './App.module.scss';

import Content from './sections/Content/Content';
import Sider from './sections/Sider/Sider';

import { Course, CoursesArray } from './types';

import { ALL_THEMES, URL } from './constanst';

const App = () => {
  const [data, setData] = useState<CoursesArray>([]);
  const [activeTag, setActiveTag] = useState<string>(sessionStorage.getItem('activeTag') || ALL_THEMES);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error(`Статус ошибки: ${response.status}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    fetchData();
  }, []);

  const tagsArray = useMemo(() => {
    return [ALL_THEMES, ...new Set(data.reduce((prev: string[], cur: Course) => {
      const { tags } = cur;
      return prev.concat(tags);
    }, []))];
  }, [data]);

  const sectionProps = { activeTag, setActiveTag, tagsArray }
  const contentProps = { activeTag, data };

  return (
    <section className={cls.wrapper}>
      <Sider {...sectionProps} />
      <Content {...contentProps} />
    </section>
  )
};

export default App;
