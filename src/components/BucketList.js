import React, { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([]);


  const addBucketItem = (item) => {
    console.log(
      '🚀 ~ file: BucketList.js ~ line 10 ~ addBucketItem ~ item',
      item
    );

    if (!item.text) {
      return;
    }

 
    const newBucket = [item, ...bucket];
    console.log(newBucket);


    setBucket(newBucket);
  };


  const completeBucketItem = (id) => {

    let updatedBucket = bucket.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedBucket);
    setBucket(updatedBucket);
  };


  const removeBucketItem = (id) => {
    const updatedBucket = [...bucket].filter((item) => item.id !== id);

    setBucket(updatedBucket);
  };


  const editBucketItem = (itemId, newValue) => {

    if (!newValue.text) {
      return;
    }

  
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      <BucketForm onSubmit={addBucketItem} />
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      ></Bucket>
    </div>
  );
}

export default BucketList;
