import { merge } from 'lodash';
import Card from './Card';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import LoadingButton from './LoadingButton';
import Pagination from './Pagination';

export default function ComponentsOverrides(theme) {
  return merge(
    Card(theme),
    Button(theme),
    ButtonGroup(theme),
    LoadingButton(theme),
    Pagination(theme)
  );
}
