<!-- <p>mesajlar sayfasina hos geldiniz</p>
@foreach ($user_messages as $message)
    <p>This is user {{ $message->id }}</p>
    <p>This is user {{ $message->title }}</p>
    <p>This is user {{ $message->description }}</p>
@endforeach -->

@extends('layouts/app')

@section('content')
<messages></messages>
@endsection