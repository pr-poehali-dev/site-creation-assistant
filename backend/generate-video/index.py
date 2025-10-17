import json
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Generate video with sound using Google Veo 3 API based on text description
    Args: event with httpMethod, body containing prompt, duration, style
    Returns: Video URL with audio track
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        prompt = body_data.get('prompt', '')
        duration = body_data.get('duration', '5')
        style = body_data.get('style', 'realistic')
        
        if not prompt:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Prompt is required'})
            }
        
        api_key = os.environ.get('GOOGLE_VEO_API_KEY')
        if not api_key:
            video_url = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'videoUrl': video_url,
                    'prompt': prompt,
                    'duration': duration,
                    'hasAudio': True,
                    'watermark': False,
                    'status': 'completed',
                    'message': 'Demo video - add GOOGLE_VEO_API_KEY for real generation'
                })
            }
        
        import requests
        
        veo_request = {
            'prompt': f"{prompt}. Style: {style}. Duration: {duration} seconds. With ambient sound and audio.",
            'duration': duration,
            'style': style,
            'audio': True,
            'watermark': False
        }
        
        response = requests.post(
            'https://generativelanguage.googleapis.com/v1beta/videos:generate',
            headers={
                'Authorization': f'Bearer {api_key}',
                'Content-Type': 'application/json'
            },
            json=veo_request,
            timeout=30
        )
        
        if response.status_code != 200:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': f'Veo API error: {response.text}'})
            }
        
        result = response.json()
        video_url = result.get('videoUrl', '')
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'videoUrl': video_url,
                'prompt': prompt,
                'duration': duration,
                'hasAudio': True,
                'watermark': False,
                'status': 'completed'
            })
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }
